module.exports = async function (context, req) {
  const date = "2023-02-07T07:09:10.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

