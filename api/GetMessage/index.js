module.exports = async function (context, req) {
  const date = "2022-11-10T11:11:00.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

