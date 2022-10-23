module.exports = async function (context, req) {
  const date = "2022-10-23T21:11:33.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

