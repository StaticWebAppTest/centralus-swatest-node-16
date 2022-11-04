module.exports = async function (context, req) {
  const date = "2022-11-04T23:13:22.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

