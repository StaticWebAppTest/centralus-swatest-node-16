module.exports = async function (context, req) {
  const date = "2022-12-12T05:09:14.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

