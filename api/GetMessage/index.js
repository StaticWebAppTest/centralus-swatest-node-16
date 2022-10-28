module.exports = async function (context, req) {
  const date = "2022-10-28T07:11:36.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

