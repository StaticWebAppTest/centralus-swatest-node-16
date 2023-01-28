module.exports = async function (context, req) {
  const date = "2023-01-28T18:10:33.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

