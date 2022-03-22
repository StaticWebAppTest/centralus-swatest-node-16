module.exports = async function (context, req) {
  const date = "2022-03-22T16:20:35.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

