module.exports = async function (context, req) {
  const date = "2022-12-28T04:11:24.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

