module.exports = async function (context, req) {
  const date = "2023-10-21T11:06:37.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

