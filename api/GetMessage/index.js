module.exports = async function (context, req) {
  const date = "2023-10-23T09:09:38.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

