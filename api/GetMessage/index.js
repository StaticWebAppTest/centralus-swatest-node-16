module.exports = async function (context, req) {
  const date = "2024-04-16T15:09:45.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

