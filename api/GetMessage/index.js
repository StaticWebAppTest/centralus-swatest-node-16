module.exports = async function (context, req) {
  const date = "2022-09-04T21:09:50.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

