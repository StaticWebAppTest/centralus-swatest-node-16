module.exports = async function (context, req) {
  const date = "2024-04-16T08:12:07.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

