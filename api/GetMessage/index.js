module.exports = async function (context, req) {
  const date = "2022-07-23T13:22:38.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

