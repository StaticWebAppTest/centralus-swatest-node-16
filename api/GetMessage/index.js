module.exports = async function (context, req) {
  const date = "2022-10-23T04:02:23.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

