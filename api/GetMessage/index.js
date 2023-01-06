module.exports = async function (context, req) {
  const date = "2023-01-06T02:15:44.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

