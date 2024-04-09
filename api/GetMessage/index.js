module.exports = async function (context, req) {
  const date = "2024-04-09T09:10:07.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

