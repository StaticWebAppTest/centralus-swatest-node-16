module.exports = async function (context, req) {
  const date = "2023-06-13T06:11:40.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

