module.exports = async function (context, req) {
  const date = "2022-09-15T13:43:23.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

