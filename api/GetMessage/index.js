module.exports = async function (context, req) {
  const date = "2024-04-24T18:12:09.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

