module.exports = async function (context, req) {
  const date = "2022-08-15T17:19:01.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

