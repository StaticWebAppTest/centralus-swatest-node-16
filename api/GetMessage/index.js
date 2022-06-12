module.exports = async function (context, req) {
  const date = "2022-06-12T07:09:35.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

