module.exports = async function (context, req) {
  const date = "2022-05-28T14:10:23.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

