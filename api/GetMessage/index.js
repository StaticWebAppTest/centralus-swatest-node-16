module.exports = async function (context, req) {
  const date = "2023-12-21T09:09:21.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

