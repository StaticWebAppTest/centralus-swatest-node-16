module.exports = async function (context, req) {
  const date = "2022-05-16T13:35:23.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

