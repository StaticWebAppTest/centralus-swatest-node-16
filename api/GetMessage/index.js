module.exports = async function (context, req) {
  const date = "2022-10-30T06:14:28.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

