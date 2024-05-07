module.exports = async function (context, req) {
  const date = "2024-05-07T06:13:30.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

