module.exports = async function (context, req) {
  const date = "2022-04-24T23:10:32.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

