module.exports = async function (context, req) {
  const date = "2022-12-16T04:11:24.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

