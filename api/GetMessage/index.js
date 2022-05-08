module.exports = async function (context, req) {
  const date = "2022-05-08T17:13:21.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

