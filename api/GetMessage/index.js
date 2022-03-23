module.exports = async function (context, req) {
  const date = "2022-03-23T05:09:33.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

