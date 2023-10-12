module.exports = async function (context, req) {
  const date = "2023-10-12T06:12:19.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

