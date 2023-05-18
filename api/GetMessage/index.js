module.exports = async function (context, req) {
  const date = "2023-05-18T11:07:05.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

