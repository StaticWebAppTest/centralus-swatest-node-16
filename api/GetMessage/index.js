module.exports = async function (context, req) {
  const date = "2022-04-22T17:19:37.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

