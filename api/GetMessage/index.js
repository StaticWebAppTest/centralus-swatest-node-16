module.exports = async function (context, req) {
  const date = "2023-07-26T06:11:27.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

