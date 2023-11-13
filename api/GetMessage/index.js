module.exports = async function (context, req) {
  const date = "2023-11-13T04:11:13.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

