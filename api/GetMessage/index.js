module.exports = async function (context, req) {
  const date = "2023-04-08T14:07:08.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

