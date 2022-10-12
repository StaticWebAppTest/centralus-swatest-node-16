module.exports = async function (context, req) {
  const date = "2022-10-12T08:16:34.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

