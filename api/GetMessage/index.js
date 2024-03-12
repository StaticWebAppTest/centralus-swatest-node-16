module.exports = async function (context, req) {
  const date = "2024-03-12T07:09:01.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

