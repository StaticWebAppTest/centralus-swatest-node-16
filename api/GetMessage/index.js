module.exports = async function (context, req) {
  const date = "2023-05-19T14:08:08.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

