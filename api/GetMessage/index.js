module.exports = async function (context, req) {
  const date = "2022-10-16T07:16:56.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

