module.exports = async function (context, req) {
  const date = "2022-10-08T17:20:42.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

