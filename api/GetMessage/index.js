module.exports = async function (context, req) {
  const date = "2024-05-22T07:09:31.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

