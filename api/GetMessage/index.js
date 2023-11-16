module.exports = async function (context, req) {
  const date = "2023-11-16T11:07:43.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

