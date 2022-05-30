module.exports = async function (context, req) {
  const date = "2022-05-30T04:31:39.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

