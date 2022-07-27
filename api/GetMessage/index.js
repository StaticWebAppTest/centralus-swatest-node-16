module.exports = async function (context, req) {
  const date = "2022-07-27T17:20:07.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

