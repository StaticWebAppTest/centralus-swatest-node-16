module.exports = async function (context, req) {
  const date = "2024-10-09T13:20:25.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

