module.exports = async function (context, req) {
  const date = "2022-12-28T09:09:08.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

