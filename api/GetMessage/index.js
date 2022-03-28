module.exports = async function (context, req) {
  const date = "2022-03-28T06:13:20.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

