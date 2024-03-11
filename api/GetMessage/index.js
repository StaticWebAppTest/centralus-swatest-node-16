module.exports = async function (context, req) {
  const date = "2024-03-11T06:12:07.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

