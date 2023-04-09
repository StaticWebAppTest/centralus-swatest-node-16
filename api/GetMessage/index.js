module.exports = async function (context, req) {
  const date = "2023-04-09T15:07:53.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

