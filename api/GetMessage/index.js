module.exports = async function (context, req) {
  const date = "2022-07-23T21:09:39.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

