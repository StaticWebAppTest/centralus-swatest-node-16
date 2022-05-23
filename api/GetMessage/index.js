module.exports = async function (context, req) {
  const date = "2022-05-23T12:19:47.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

